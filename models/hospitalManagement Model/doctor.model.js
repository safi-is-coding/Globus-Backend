import mongoose from 'mongoose'

const HospitalHours = mongoose.Schema({
    hospitalName: mongoose.Schema.Types.Hospital,
    workingHours: number
})


const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    salary: {
        type: number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experienceInYears: {
        type: number,
        default: 0,
        required: true
    },
    worksInHospitals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hospital',
            required: true
        }
    ],
    workingHoursInHospital: {
        type: [HospitalHours]
    }


}, {timestamps: true})

export const Doctor = mongoose.model('Doctor', doctorSchema)