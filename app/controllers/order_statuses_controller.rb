class OrderStatusesController < ApplicationController
  def update
    @status = OrderStatus.find(params[:item_id])
    if @status.status == 1 || @status.status == 2
      if @status.status == 1
        @status.update(status: 2)
      else
        @status.update(status: 1)
      end
    end
    redirect_to item_path
  end
end
