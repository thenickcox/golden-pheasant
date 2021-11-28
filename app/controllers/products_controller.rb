class ProductsController < ApplicationController
  def show
    # Obviously, this wouldn't be `.first` in the real world. This is
    # specific to the requirements of the coding challenge.
    @product = Product.first
    respond_to do |format|
      format.html
      format.json { render json: @product }
    end
  end
end
