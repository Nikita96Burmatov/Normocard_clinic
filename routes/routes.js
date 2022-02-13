import  Router  from "express";
import Reviews from '../models/Reviews.js'

const routes = Router();

routes.get('/', async (req, res) => {

    // const reviews = await Reviews.find().lean()

    res.render('home', {
        title: 'Normocard',
        isIndex: true,
        // reviews
    })
});

routes.get('/doctor', async(req, res)=>{

    res.render('doctor', {
        title: 'Normocard | Врачи',
        isDoctor: true
    })
})


routes.get('/solobueva-anna-andreeva', async(req, res)=>{

    res.render('solobueva-anna-andreeva', {
        title: 'Normocard | Солобуева Анна Андреевна',
        isAboutDoctor: true
    })
})

routes.get('/bairacova-julia', async(req, res)=>{

    res.render('bairacova-julia', {
        title: 'Normocard | Байракова Юлия Вячеславовна ',
        isAboutDoctor: true
    })
})

routes.get('/svincova-elena-vladimirovna', async(req, res)=>{

    res.render('svincova-elena-vladimirovna', {
        title: 'Normocard | Свинцова Елена Владимировна ',
        isAboutDoctor: true
    })
})

routes.get('/zvereva-tatiana-nicolaevna', async(req, res)=>{

    res.render('zvereva-tatiana-nicolaevna', {
        title: 'Normocard | Зверева Татьяна Николаевна ',
        isAboutDoctor: true
    })
})

routes.get('/lebedeva-natalya-borisovna', async(req, res)=>{

    res.render('lebedeva-natalya-borisovna', {
        title: 'Normocard | Лебедева Наталья Борисовна ',
        isAboutDoctor: true
    })
})

routes.get('/rijenkova-svetlana-vladimirovna', async(req, res)=>{

    res.render('rijenkova-svetlana-vladimirovna', {
        title: 'Normocard | Рыженкова Светлана Владимировна ',
        isAboutDoctor: true
    })
})

routes.get('/homykova-tatiana-alecsandrova', async(req, res)=>{

    res.render('homykova-tatiana-alecsandrova', {
        title: 'Normocard | Рыженкова Светлана Владимировна ',
        isAboutDoctor: true
    })
})



routes.get('/services', async(req, res)=>{

    res.render('services', {
        title: 'Normocard | Услуги ',
        isDoctor: true
    })
})



routes.get('/contact', async(req, res) =>{

    res.render('contact', {
        title: 'Normocard | Контакты ',
        isContact: true
    })
})

routes.get('/about', async(req, res) =>{

    res.render('about', {
        title: 'Normocard | О клинике',
        isAbout: true
    })
})

routes.get('/cardio', async(req, res)=>{

    res.render('cardio', {
        title: 'Normocard | Приём кардиолога',
        isCardio: true
    })
})

routes.get('/rheumatologist', async(req, res)=>{

    res.render('rheumatologist', {
        title: 'Normocard | Приём ревмотолога',
        isRheumatologist: true
    })
})

routes.get('/pulmonologist', async(req, res)=>{

    res.render('pulmonologist', {
        title: 'Normocard | Приём пульмонолога',
        isPulmonologis: true
    })
})

routes.get('/therapist', async(req, res)=>{

    res.render('therapist', {
        title: 'Normocard | Приём терапевта',
        isTherapist: true
    })
})

routes.get('/cardio-services', async(req,res)=>{

    res.render('cardio-services', {
        title: 'Normocard | Кардиология',
        isCardioService: true
    })
})


routes.get('/rheumatologist-services', async(req,res)=>{

    res.render('rheumatologist-services', {
        title: 'Normocard | Ревмотология',
        isRheumatologistService: true
    })
})

routes.get('/pulmonologist-services', async(req,res)=>{

    res.render('pulmonologist-services', {
        title: 'Normocard | Пульмонология',
        isPulmonologisttService: true
    })
})

routes.get('/how-is-the-admission', async(req,res)=>{

    res.render('how-is-the-admission', {
        title: 'Normocard | Как проходит прием ',
        isPulmonologisttService: true
    })
})

routes.get('/privacy', async(req,res)=>{

    res.render('privacy', {
        title: 'Normocard | Политики конфиденциальности ',
        isPrivacy: true
    })
})

export default routes