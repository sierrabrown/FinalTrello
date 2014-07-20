module Api
  class BoardsController < ApiController
    def create
      @board = current_user.boards.new(board_params)

      if @board.save
        render "boards/show"
      else
        render json: @board.errors.full_messages, status: :unprocessable_entity
      end
    end

    def destroy
      @board = current_user.boards.find(params[:id])
      if @board.destroy
        render "boards/show"
      else
        raise "WTF"
      end
    end

    def index
      @boards = current_user.boards
      render "boards/index"
    end

    def show
      @board = Board.includes(:members, lists: :cards).find(params[:id])

      #if @board.is_member?(current_user)
      render 'boards/show'
      #else
      #  render json: ["You aren't a member of this board"], status: 403
      #end
    end

    private

    def board_params
      p params
      params.permit(:title)
    end
  end
end
