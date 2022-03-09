import  Router  from "express";


const routes = Router();

routes.get('/', async (req, res) => {


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

routes.get('/pomeshnikova-svetlana-aleksandrovna', async(req, res)=>{

    res.render('pomeshnikova-svetlana-aleksandrovna', {
        title: 'Normocard | Помешкина Светлана Александровна ',
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

routes.get('/rijenkova-svetlana-nikolaevna', async(req, res)=>{

    res.render('rijenkova-svetlana-nikolaevna', {
        title: 'Normocard | Рыженкова Светлана Николаевна ',
        isAboutDoctor: true
    })
})

routes.get('/homykova-tatiana-alecsandrova', async(req, res)=>{

    res.render('homykova-tatiana-alecsandrova', {
        title: 'Normocard | Хомякова Татьяна Александровна ',
        isAboutDoctor: true
    })
})

routes.get('/svincova-elena-vladimirovna', async(req, res)=>{

    res.render('svincova-elena-vladimirovna', {
        title: 'Normocard | Свинцова Елена Владимировна',
        isAboutDoctor: true
    })
})

routes.get('/smakotina-svetlana-anatolevna', async(req, res)=>{

    res.render('smakotina-svetlana-anatolevna', {
        title: 'Normocard | Смакотина Светлана Анатольевна ',
        isAboutDoctor: true
    })
})

routes.get('/kazachenko-aleksandr-aleksandrovich', async(req, res)=>{

    res.render('kazachenko-aleksandr-aleksandrovich', {
        title: 'Normocard | Казаченко Александр Александрович ',
        isAboutDoctor: true
    })
})

routes.get('/sitnikov-dmitriy-vladimirovich', async(req, res)=>{

    res.render('sitnikov-dmitriy-vladimirovich', {
        title: 'Normocard | Ситников Дмитрий Владимирович ',
        isAboutDoctor: true
    })
})
routes.get('/shoforus-tatyana-vladimirovna', async(req, res)=>{

    res.render('shoforus-tatyana-vladimirovna', {
        title: 'Normocard | Шофорусь Татьяна Владимировна ',
        isAboutDoctor: true
    })
})
routes.get('/ionin-valeriy-aleksandrovich', async(req, res)=>{

    res.render('ionin-valeriy-aleksandrovich', {
        title: 'Normocard | Ионин Валерий Александрович ',
        isAboutDoctor: true
    })
})
routes.get('/kuleshova-darya-vladimirovna', async(req, res)=>{

    res.render('kuleshova-darya-vladimirovna', {
        title: 'Normocard | Кулешова Дарья Владимировна ',
        isAboutDoctor: true
    })
})

routes.get('/vasileva-vera-vladimirovna', async(req, res)=>{

    res.render('vasileva-vera-vladimirovna', {
        title: 'Normocard | Васильева Вера Владимировна ',
        isAboutDoctor: true
    })
})

routes.get('/kusnir-irina-nikolaevna', async(req, res)=>{

    res.render('kusnir-irina-nikolaevna', {
        title: 'Normocard | Кушнир Ирина Николаевна  ',
        isAboutDoctor: true
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

routes.get('/zapis-na-priem', async(req,res)=>{

    res.render('zapis-na-priem', {
        title: 'Normocard | Запись на прием ',
        isForm: true
    })
})

routes.get('/cabinet', async(req,res)=>{

    res.render('cabinet', {
        title: 'Normocard | Личный кабинет ',
        isCabinet: true
    })
})

export default routes