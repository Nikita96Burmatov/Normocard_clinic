import  Router  from "express";
import Reviews from '../models/Reviews.js'

const routes = Router();

routes.get('/', async (req, res) => {

    // const reviews = await Reviews.find().lean()

    res.render('home', {
        title: 'Normocard Clinic',
        isIndex: true,
        // reviews
    })
});

routes.get('/doctor', async(req, res)=>{

    res.render('doctor', {
        title: 'Normocard Clinic | Врачи',
        isDoctor: true
    })
})


routes.get('/solobueva-anna-andreeva', async(req, res)=>{

    res.render('solobueva-anna-andreeva', {
        title: 'Normocard Clinic | Солобуева Анна Андреевна',
        isAboutDoctor: true
    })
})

routes.get('/bairacova-julia', async(req, res)=>{

    res.render('bairacova-julia', {
        title: 'Normocard Clinic | Байракова Юлия Вячеславовна ',
        isAboutDoctor: true
    })
})

routes.get('/svincova-elena-vladimirovna', async(req, res)=>{

    res.render('svincova-elena-vladimirovna', {
        title: 'Normocard Clinic | Свинцова Елена Владимировна ',
        isAboutDoctor: true
    })
})

routes.get('/zvereva-tatiana-nicolaevna', async(req, res)=>{

    res.render('zvereva-tatiana-nicolaevna', {
        title: 'Normocard Clinic | Зверева Татьяна Николаевна ',
        isAboutDoctor: true
    })
})

routes.get('/lebedeva-natalya-borisovna', async(req, res)=>{

    res.render('lebedeva-natalya-borisovna', {
        title: 'Normocard Clinic | Лебедева Наталья Борисовна ',
        isAboutDoctor: true
    })
})

routes.get('/rijenkova-svetlana-vladimirovna', async(req, res)=>{

    res.render('rijenkova-svetlana-vladimirovna', {
        title: 'Normocard Clinic | Рыженкова Светлана Владимировна ',
        isAboutDoctor: true
    })
})

routes.get('/homykova-tatiana-alecsandrova', async(req, res)=>{

    res.render('homykova-tatiana-alecsandrova', {
        title: 'Normocard Clinic | Рыженкова Светлана Владимировна ',
        isAboutDoctor: true
    })
})



routes.get('/services', async(req, res)=>{

    res.render('services', {
        title: 'Normocard Clinic | Услуги ',
        isDoctor: true
    })
})



routes.get('/contact', async(req, res) =>{

    res.render('contact', {
        title: 'Normocard Clinic | Контакты ',
        isContact: true
    })
})

routes.get('/about', async(req, res) =>{

    res.render('about', {
        title: 'Normocard Clinic О клинике',
        isAbout: true
    })
})

routes.get('/cardio', async(req, res)=>{

    res.render('cardio', {
        title: 'Normocard Clinic | Приём кардиолога',
        isCardio: true
    })
})

routes.get('/rheumatologist', async(req, res)=>{

    res.render('rheumatologist', {
        title: 'Normocard Clinic | Приём ревмотолога',
        isRheumatologist: true
    })
})

routes.get('/pulmonologist', async(req, res)=>{

    res.render('pulmonologist', {
        title: 'Normocard Clinic | Приём пульмонолога',
        isPulmonologis: true
    })
})

routes.get('/therapist', async(req, res)=>{

    res.render('therapist', {
        title: 'Normocard Clinic | Приём терапевта',
        isTherapist: true
    })
})

routes.get('/cardio-services', async(req,res)=>{

    res.render('cardio-services', {
        title: 'Normocard Clinic | Кардиология',
        isCardioService: true
    })
})


routes.get('/rheumatologist-services', async(req,res)=>{

    res.render('rheumatologist-services', {
        title: 'Normocard Clinic | Ревмотология',
        isRheumatologistService: true
    })
})

routes.get('/pulmonologist-services', async(req,res)=>{

    res.render('pulmonologist-services', {
        title: 'Normocard Clinic | Пульмонология',
        isPulmonologisttService: true
    })
})

routes.get('/how-is-the-admission', async(req,res)=>{

    res.render('how-is-the-admission', {
        title: 'Normocard Clinic | Как проходит прием ?',
        isPulmonologisttService: true
    })
})

export default routes