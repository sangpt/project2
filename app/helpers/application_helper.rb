module ApplicationHelper
  def full_title page_title = ""
    @base_title = t "app_name"

    if page_title.empty?
      @base_title
    else
      page_title + " | " + @base_title
    end
  end

  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def resource_class
    User
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end
end
