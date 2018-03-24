require 'json'
require 'fileutils'

module Jekyll
  class PostsJsonGenerator < Generator
    priority :low

    def generate(site)
      site.config['posts_json_path'] = 'posts.json' if !site.config['posts_json_path']

      json_file = File.new(File.join(site.config['destination'], site.config['posts_json_path']), 'w')

      posts = []

      site.posts.each do |post|
        posts << {
          :date => post.date,
          :url => post.url,
          :title => post.title,
          :excerpt => post.excerpt,
          :tags => post.tags
        } if post.published?
      end

      json_file.write(posts.to_json)
      json_file.close

      site.static_files << Jekyll::JsonFile.new(site, site.config['destination'], "/", site.config['posts_json_path'])
    end
  end

  class JsonFile < StaticFile
    def write(dest)
      begin
        super(dest)
      rescue
      end

      true
    end
  end

  class PostsJsonTag < Liquid::Tag
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      IO.read(File.join(context.registers[:site].config['destination'], context.registers[:site].config['posts_json_path']))
    end
  end
end

Liquid::Template.register_tag('posts_json', Jekyll::PostsJsonTag)
