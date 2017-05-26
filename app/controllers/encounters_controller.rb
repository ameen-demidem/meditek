class EncountersController < ApplicationController
  before_action :set_patient
  before_action :set_encounter, only: [:show, :edit, :update, :destroy]

  # GET /encounters
  # GET /encounters.json
  def index
    @encounters = @patient.encounters
  end

  # GET /encounters/1
  # GET /encounters/1.json
  def show
  end

  # GET /encounters/new
  def new
    @encounter = @patient.encounters.build
  end

  # GET /encounters/1/edit
  def edit
  end

  # POST /encounters
  # POST /encounters.json
  def create
    @encounter = Encounter.new(encounter_params)

    respond_to do |format|
      if @encounter.save
        format.html { redirect_to [@patient, @encounter], notice: 'Encounter was successfully created.' }
        format.json { render :show, status: :created, location: [@patient, @encounter] }
      else
        format.html { render :new }
        format.json { render json: @encounter.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /encounters/1
  # PATCH/PUT /encounters/1.json
  def update
    respond_to do |format|
      if @encounter.update(encounter_params)
        format.html { redirect_to [@patient, @encounter], notice: 'Encounter was successfully updated.' }
        format.json { render :show, status: :ok, location: [@patient, @encounter] }
      else
        format.html { render :edit }
        format.json { render json: @encounter.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /encounters/1
  # DELETE /encounters/1.json
  def destroy
    @encounter.destroy
    respond_to do |format|
      format.html { redirect_to patient_encounters_path(@patient), notice: 'Encounter was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_encounter
      begin
        @encounter = Encounter.find(params[:id])
        unless @patient.encounters.include? @encounter
          logger.info "Got a request for an encouter (#{:id}) "+
                      "that doesn't belong to the patient #{:patient_id}"
          redirect_to root_path
        end
      rescue StandardError => e
        logger.info "Got a request for a non-existing encouter #{params[:id]}"
      end
    end

    def set_patient
      begin
        @patient = Patient.find(params[:patient_id])
      rescue
        logger.info "Got a request for a non-existing patient #{:patient_id}"
        redirect_to root_path
      end
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def encounter_params
      params
        .require(:encounter)
        .permit(:visit, :admitted_at, :discharged_at, :location, :room, :bed, :patient_id)
    end
end
