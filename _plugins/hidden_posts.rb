# frozen_string_literal: true

# Hidden posts: noindex, exclude from RSS/feeds, and remove from public archives.
module HiddenPosts
  module Helpers
    module_function

    def hidden?(post)
      return false unless post

      if post.respond_to?(:data)
        post.data['hidden'] == true
      else
        post['hidden'] == true
      end
    end

    def archive_page?(page)
      page.is_a?(Jekyll::Archives::Archive)
    end

    def archive_layout?(page)
      layout = page.data['layout']
      layout = layout.to_s if layout.respond_to?(:to_s)
      %w[archive-year archive-tag archive-category].include?(layout)
    end

    def archive_posts(page)
      if archive_page?(page)
        page.posts
      else
        page.data['posts']
      end
    end

    def set_archive_posts!(page, posts)
      if archive_page?(page)
        page.posts = posts
        page.instance_variable_set(:@to_liquid, nil)
      else
        page.data['posts'] = posts
      end
    end

    def filter_archives!(site)
      site.pages.reject! do |page|
        next false unless archive_layout?(page)

        posts = archive_posts(page)
        next false unless posts.is_a?(Array)

        visible = posts.reject { |p| hidden?(p) }
        set_archive_posts!(page, visible)

        if visible.empty?
          page.data['published'] = false
          true
        else
          false
        end
      end
    end
  end

  class Metadata < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      site.posts.docs.each do |doc|
        next unless Helpers.hidden?(doc)

        doc.data['robots'] = 'noindex, nofollow'
        doc.data['feed'] = { 'hide' => true }
        doc.data['sitemap'] = false
      end
    end
  end

  # Run after jekyll-archives (:normal) so archive pages already exist.
  class ArchiveFilter < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      Helpers.filter_archives!(site)
    end
  end

  # Admin-only tag/category/media/status archives (include hidden posts; noindex).
  class AdminArchive < Jekyll::Page
    attr_accessor :posts, :type, :slug

    LAYOUTS = {
      'tag' => 'admin-archive-tag',
      'category' => 'admin-archive-category',
      'media' => 'admin-archive-media',
      'status' => 'admin-archive-status',
    }.freeze

    def initialize(site, title, type, posts, layout = nil)
      @site = site
      @posts = posts.sort!.reverse!
      @type = type
      @title = title
      @slug = Jekyll::Utils.slugify(title)
      @ext = '.html'
      @path = relative_path
      @name = 'index'
      @data = {
        'layout' => layout || LAYOUTS.fetch(type),
        'robots' => 'noindex, nofollow',
        'sitemap' => false,
      }
      @content = ''
    end

    def title
      @title if @title.is_a?(String)
    end

    def url
      "/blog/admin/#{@type}/#{@slug}/"
    end

    def relative_path
      "blog/admin/#{@type}/#{@slug}/index.html"
    end

    def to_liquid
      @to_liquid ||= Jekyll::Archives::PageDrop.new(self)
    end
  end

  class AdminArchives < Jekyll::Generator
    safe true
    priority :high

    def generate(site)
      site.pages.concat(build_archives(site, 'tag', :tags))
      site.pages.concat(build_archives(site, 'category', :categories))
      site.pages.concat(build_meta_archives(site, 'media', 'media_type', 'source_platform'))
      site.pages.concat(build_meta_archives(site, 'status', 'post_status'))
    end

    private

    def build_archives(site, type, attr)
      groups = Hash.new { |h, k| h[k] = [] }
      site.posts.docs.each do |post|
        Array(post.data[attr.to_s]).each { |label| groups[label] << post }
      end
      groups.map { |title, posts| AdminArchive.new(site, title, type, posts) }
    end

    def build_meta_archives(site, type, field, fallback_field = nil)
      groups = Hash.new { |h, k| h[k] = [] }
      site.posts.docs.each do |post|
        value = post.data[field.to_s]
        value = post.data[fallback_field.to_s] if (value.nil? || value.to_s.empty?) && fallback_field
        next if value.nil? || value.to_s.empty?

        groups[value.to_s] << post
      end
      groups.map { |title, posts| AdminArchive.new(site, title, type, posts) }
    end
  end

  Jekyll::Hooks.register :site, :pre_render do |site|
    Helpers.filter_archives!(site)
  end
end
