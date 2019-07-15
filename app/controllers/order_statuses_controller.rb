class OrderStatusesController < ApplicationController
  def update
    @status = OrderStatus.where(item_id: params[:item_id])
    if @status[0].status == 1 || @status[0].status == 2
      if @status[0].status == 1
        @status.update(status: 2)
      else
        @status.update(status: 1)
      end
    end
    redirect_to item_path
  end
end
