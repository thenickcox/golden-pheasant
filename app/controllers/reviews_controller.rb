class ReviewsController < ApplicationController
  def index
    @reviews = Review.where(product_id: params[:product_id])
    respond_to do |format|
      format.html
      format.json { render json: @reviews }
    end
  end
end
