let navCardio = document.getElementById('cardio');

let navRheumatology = document.getElementById('rheumatology');

let navPulmonology = document.getElementById('pulmonology');

let navFunctionalDiagnostics = document.getElementById('functional_diagnostics');

let navTherapy = document.getElementById('therapy');



function getCardio() {

  let cardio = document.getElementById('flush-collapseOne');

  cardio.insertAdjacentHTML('beforeend',
  `<h2>Кардиология</h2>
  <div class="row">
    <div class="col-sm">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link">Прием врача-кардиолога + регистрация и расшифровка ЭКГ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Прием врача-кардиолога + регистрация и расшифровка ЭКГ, к.м.н.</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Комплексное ведение пациента врачом-кардиологом с помощью использования телемедицинских технологий, ПАКЕТ № 1 (ведение пациента в течение трех месяцев, включает: один очный прием, три видео-консультации, четыре подключения пациента в чат)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Комплексное ведение пациента врачом-кардиологом с помощью использования телемедицинских технологий, ПАКЕТ № 2 (ведение пациента в течение 6 ти месяцев, включает: 2 очных приема, 6 видео-консультаций, 8 чатов общения с врачом)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Комплексное ведение пациента врачом-кардиологом с помощью использования телемедицинских технологий, ПАКЕТ № 3 (Ведение пациента в течение года, включает: 3 очных приема, 12 видео-консультаций, 16 чатов общения с врачом)</a>
          </li>
        </ul>
    </div>
    
  </div>`);
}

function getRheumatology(){

  let rheumatology = document.getElementById("flush-collapseTwo");

    rheumatology.insertAdjacentHTML('beforeend', 
    `<h2>Ревматология</h2>
    <div class="row">
        <div class="col-sm">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link">Комплексное Комплексное ведение пациента врачом-ревматологом с помощью использования телемедицинских технологий, ПАКЕТ № 1 ((ведение пациента в течение 3х месяцев, включает: один очный прием, 3 видео-консультации, 4 чата общения с врачом)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Комплексное Комплексное ведение пациента врачом-ревматологом с помощью использования телемедицинских технологий, ПАКЕТ № 2(ведение пациента в течение 6 ти месяцев, включает: 2 очных приема, 6 видео-консультаций, 8 чатов общения с врачом)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Комплексное Комплексное ведение пациента врачом-ревматологом с помощью использования телемедицинских технологий, ПАКЕТ № 3(Ведение пациента в течение года, включает: 3 очных приема, 12 видео-консультаций, 16 чатов общения с врачом)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Ирригация одного коленного сустава (промывание)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Лечение пяточных шпор методом внутрисуставного введения лекарственных препаратов</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Паравертебральная блокада (без учёта стоимости препарата)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Блокада одного сустава мелкого сустава (кисти, стопы)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Блокада среднего и крупного сустава (коленные, плечевые, голеностопные, локтевые))</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Внутрисуставное введение протезов синовиальной жидкости с учтом стоимости препарат</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Внутрисуставное введение протезов синовиальной жидкости (без учёта стоимости препарата)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Лечение остеопороза (внутривенное вКомплексное ведение препаратов с противоостеопоротическим действием) под наблюдением врача (ризокластина) С учетом стоимости</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Лечение остеопороза (внутривенное вКомплексное ведение препаратов с противоостеопоротическим действием) под наблюдением врача (ризокластина) Без учета стоимости</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Медикаментозная блокада шейного отдела позвоночника (без учёта стоимости препарата)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Пункция сустава (аспирация синовиальной жидкости)</a>
            </li>
          </ul>
        </div>

      </div>`);
}

function getPulmonology(){

  let pulmonology = document.getElementById("flush-collapseThree");

  pulmonology.insertAdjacentHTML('beforeend',
  `<h2>Пульмонология</h2>
  <div class="row">
      <div class="col-sm">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link">Исследование неспровоцированных дыхательных объемов и потоков с использованием пикфлоуметра</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Исследование спровоцированных дыхательных объемов (спирометрия)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Прокат небулайзера (сутки)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Комплексное ведение пациента врачом-пульмонологом с помощью использования телемедицинских технологий, ПАКЕТ № 1(ведение пациента в течение 3х месяцев, включает: один очный прием, 3 видео-консультации, 4 чата общения с врачом)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Комплексное ведение пациента врачом-пульмонологом с помощью использования телемедицинских технологий, ПАКЕТ № 2 (ведение пациента в течение 6 ти месяцев, включает: 2 очных приема, 6 видео-консультаций, 8 чатов общения с врачом)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Комплексное ведение пациента врачом-пульмонологом с помощью использования телемедицинских технологий, ПАКЕТ № 3 (Ведение пациента в течение года, включает: 3 очных приема, 12 видео-консультаций, 16 чатов общения с врачом)</a>
          </li>
        </ul>
      </div>

    </div>`);
}

function getFunctionalDiagnostics(){

  let functionalDiagnostics = document.getElementById('flush-collapseFour');

  functionalDiagnostics.insertAdjacentHTML('beforeend',
  
  `<h2>Функциональная диагностика</h2>
  <div class="row">
      <div class="col-sm">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link">Запись ЭКГ с расшифровкой</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Расшифровка, описание и интерпретация ЭКГ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">ЭКГ на дому (ФПК, Центральный, Ленинский, Заводский, Кировский, Рудничный районы)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Суточное мониторирование ЭКГ</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Суточное мониторирование ЭКГ на дому</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Многосуточное мониторирование ЭКГ 48 на дому</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Многосуточное мониторирование ЭКГ более 48 часов</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Консилиум по 2 специальностям</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Консилиум по 3 специальностям</a>
          </li>
        </ul>
      </div>

    </div>`

  );
}


function getTherapy(){

  let therapy = document.getElementById('flush-collapseFive');

  therapy.insertAdjacentHTML('beforeend',
  `<h2>Терапия</h2>
  <div class="row">
      <div class="col-sm">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link">Комплексное Комплексное ведение пациента врачом-терапевтом с помощью использования телемедицинских технологий, ПАКЕТ № 1 (ведение пациента в течение 3х месяцев, включает: один очный прием, 3 видео-консультации, 4 чата общения с врачом)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Комплексное Комплексное ведение пациента врачом-терапевтом с помощью использования телемедицинских технологий, ПАКЕТ № 2 (ведение пациента в течение 6 ти месяцев, включает: 2 очных приема, 6 видео-консультаций, 8 чатов общения с врачом)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">ЭКГ на дому (ФПК, Центральный, Ленинский, Заводский, Кировский, Рудничный районы)</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Комплексное Комплексное ведение пациента врачом-терапевтом с помощью использования телемедицинских технологий, ПАКЕТ № 3(Ведение пациента в течение года, включает: 3 очных приема, 12 видео-консультаций, 16 чатов общения с врачом)</a>
          </li>
        </ul>
      </div>

    </div>` )
}

navCardio.addEventListener('click', getCardio());

navRheumatology.addEventListener('click', getRheumatology());

navPulmonology.addEventListener('click', getPulmonology());

navFunctionalDiagnostics.addEventListener('click', getFunctionalDiagnostics());

navTherapy.addEventListener('click', getTherapy());

