class NotesController < ApplicationController
  def index
    @notes = Note.all
    # @mynotes = Note.all.filter{|note| note.user_id == current_user.id}
  end

  def new
    @note = Note.new
  end

  def create
    @note = Note.create(note_params)
    if @note.save
      redirect_to @note
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    @note.update(note_params)
    if @note.save
      redirect_to @notes
    else
      render :edit
    end
  end

  def destroy
    @note.delete
    # render json:
  end

  private

      def note_params
        params.require(:note).permit(:lab_title, :quick_ref, :body, :mod_num)
      end

      def set_note
        @note = Note.find(params[:id])
      end
end
