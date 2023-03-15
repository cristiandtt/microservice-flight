import mongoose from 'mongoose';
export const FlightSchema = new mongoose.Schema(
  {
    pilot: { type: String, require: true },
    airplane: { type: String, require: true },
    destinationCity: { type: String, require: true },
    flightDate: { type: Date, require: true }
   
  },
  {
    timestamps: true,
  },
);

FlightSchema.index({pilot:1}, {unique:true});
FlightSchema.index({airplane:1}, {unique:true});