module ApplicationHelper
  def get_video(url)
    video_tag url, controls: true, class: 'video'
  end
end
