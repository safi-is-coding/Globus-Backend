import mongoose from 'mongoose'

const medicalReportSchema = mongoose.Schema({}, {timestamps: true})

export const MedicalReport = mongoose.model('MedicalReport', medicalReportSchema)