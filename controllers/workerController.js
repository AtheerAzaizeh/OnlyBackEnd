const { findAll, findById } = require('../services/personalDetails');
const { findAllByUserId: findAllEducationByUserId } = require('../services/education');
const { findAllByUserId: findAllExperienceByUserId } = require('../services/workExperience');
const { response } = require('express');

async function getWorkers(req, res) {
    try {
        const { years_of_experience, skills, degree } = req.query;
        
        const workers = await findAll();
        
        const filteredWorkers = [];
        
        for (const worker of workers) {
            const education = await findAllEducationByUserId(worker.user_id);
            const workExperience = await findAllExperienceByUserId(worker.user_id);
            
            const totalExperience = workExperience.reduce((acc, exp) => {
                const startDate = new Date(exp.start_date);
                const endDate = exp.end_date ? new Date(exp.end_date) : new Date();
                const years = (endDate - startDate) / (1000 * 60 * 60 * 24 * 365);
                return acc + years;
            }, 0);
            
            const hasSkills = workExperience.some(exp => skills.split(',').every(skill => exp.skills.includes(skill)));
            const hasDegree = education.some(edu => edu.degree === degree);

            if (totalExperience >= years_of_experience && hasSkills && hasDegree) {
                filteredWorkers.push(worker);
            }
        }

        res.json(filteredWorkers);
    } catch (error) {
        console.error('Error fetching workers:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { getWorkers };
