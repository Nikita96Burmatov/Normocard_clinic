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
  <table class="table">
  <tbody>
      <tr>
      <th scope="row"></th>
      <td>Прием врача-кардиолога+регистрация и расшифровка ЭКГ</td>
      <td>1500 р</td>
      <td>@mdo</td>
      </tr>
      <tr>
      <th scope="row"></th>
      <td>Прием врача-кардиолога+регистрация и расшифровка ЭКГ, к.м.н.</td>
      <td>1100р</td>
      <td>@fat</td>
      </tr>
      <tr>
      <th scope="row"></th>
      <td>Первичный прием врача-кардиолога, к.м.н.</td>
      <td>1700р</td>
      <td>@twitter</td>
      </tr>
      <tr>
      <th scope="row"></th>
      <td>Комплексное ведение пациента врачом-кардиологом в течение месяца с помощью использования телемедицинских технологий (одна первичная консультация дистанционно, очный прием, 3 повторных консультации дистанционно (1 чат, 1 видеосвязь, 1 звонок)</td>
      <td>4590р</td>
      <td>@twitter</td>
      </tr>
      <tr>
      <th scope="row"></th>
      <td>Комплексное ведение пациента врачом-кардиологом в течение месяца с помощью использования телемедицинских технологий (одна первичная консультация дистанционно, очный прием, 3 повторных консультации дистанционно (1 чат, 1 видеосвязь, 1 звонок), к.м.н. </td>
      <td>5185р</td>
      <td>@twitter</td>
      </tr>
      <tr>
      <th scope="row"></th>
      <td>Комплексное ведение пациента врачом-кардиологом в течение месяца с помощью использования телемедицинских технологий (одна первичная консультация дистанционно, очный прием, 3 повторных консультации дистанционно (1 чат, 1 видеосвязь, 1 звонок), д.м.н. </td>
      <td>7565р</td>
      <td>@twitter</td>
      </tr>
  </tbody>
</table>
    
  </div>`);
}

function getRheumatology(){

  let rheumatology = document.getElementById("flush-collapseTwo");

    rheumatology.insertAdjacentHTML('beforeend', 
    `<h2>Ревматология</h2>
    <div class="row">
        <div class="col-sm">
        <table class="table">
        <tbody>
            <tr>
            <th scope="row"></th>
            <td>Комплексное ведение пациента врачом-кардиологом в течение месяца с помощью использования телемедицинских технологий (одна первичная консультация дистанционно, очный прием, 3 повторных консультации дистанционно (1 чат, 1 видеосвязь, 1 звонок), к.м.н. </td>
            <td>5185р</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Комплексное ведение пациента врачом-кардиологом в течение месяца с помощью использования телемедицинских технологий (одна первичная консультация дистанционно, очный прием, 3 повторных консультации дистанционно (1 чат, 1 видеосвязь, 1 звонок), д.м.н. </td>
            <td>7565р</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Ирригация одного коленного сустава (промывание)</td>
            <td>1000р</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Лечение пяточных шпор методом внутрисуставного введения лекарственных препаратов</td>
            <td>950р</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Паравертебральная блокада (без учёта стоимости препарата)</td>
            <td>750р</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Блокада одного сустава мелкого сустава (кисти, стопы) </td>
            <td>?</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Блокада среднего и крупного сустава (коленные, плечевые, голеностопные, локтевые) </td>
            <td>?</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Внутрисуставное введение протезов синовиальной жидкости с учтом стоимости препарат </td>
            <td>800р</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Лечение остеопороза (внутривенное вКомплексное ведение препаратов с противоостеопоротическим действием) под наблюдением врача (ризокластина) С учетом стоимости </td>
            <td>?</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Лечение остеопороза (внутривенное вКомплексное ведение препаратов с противоостеопоротическим действием) под наблюдением врача (ризокластина) Без учета стоимости</td>
            <td>950р</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Медикаментозная блокада шейного отдела позвоночника (без учёта стоимости препарата)</td>
            <td>860р</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <th scope="row"></th>
            <td>Пункция сустава (аспирация синовиальной жидкости)</td>
            <td>750р</td>
            <td>@twitter</td>
            </tr>
        </tbody>
      </table>
        </div>

      </div>`);
}

function getPulmonology(){

  let pulmonology = document.getElementById("flush-collapseThree");

  pulmonology.insertAdjacentHTML('beforeend',
  `<h2>Пульмонология</h2>
  <div class="row">
      <div class="col-sm">
      <div class="row">
      <div class="col-sm">
      <table class="table">
      <tbody>
          <tr>
          <th scope="row"></th>
          <td>Исследование неспровоцированных дыхательных объемов и потоков с использованием пикфлоуметра</td>
          <td>1300р</td>
          <td>@mdo</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>Исследование спровоцированных дыхательных объемов (спирометрия)</td>
          <td>700р</td>
          <td>@fat</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>Прокат небулайзера (сутки)</td>
          <td>250р</td>
          <td>@twitter</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>Комплексное ведение пациента врачом-пульмонологом в течение месяца с помощью использования телемедицинских технологий (одна первичная консультация дистанционно, 1 очный прием, 3 повторных консультации дистанционно (1 чат, 1 видеосвязь, 1 звонок)</td>
          <td>4590р</td>
          <td>@twitter</td>
          </tr>
      </tbody>
    </table>
      </div>

    </div>`);
}

function getFunctionalDiagnostics(){

  let functionalDiagnostics = document.getElementById('flush-collapseFour');

  functionalDiagnostics.insertAdjacentHTML('beforeend',
  
  `<h2>Функциональная диагностика</h2>
  <div class="row">
      <div class="col-sm">
      <table class="table">
      <tbody>
          <tr>
          <th scope="row"></th>
          <td>Запись ЭКГ с расшифровкой</td>
          <td>500р</td>
          <td>@mdo</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>Расшифровка, описание и интерпретация ЭКГ</td>
          <td>200р</td>
          <td>@fat</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>ЭКГ на дому (ФПК, Центральный, Ленинский, Заводский, Кировский, Рудничный районы)</td>
          <td>1500р</td>
          <td>@twitter</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>Суточное мониторирование ЭКГ</td>
          <td>1500р</td>
          <td>@twitter</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>Суточное мониторирование ЭКГ на дому</td>
          <td>2500р</td>
          <td>@twitter</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>Многосуточное мониторирование ЭКГ более 48 часов</td>
          <td>500р/сутки</td>
          <td>@twitter</td>
          </tr>
      </tbody>
    </table>
      </div>
      <h2>Другие услуги</h2>
  <div class="row">
      <div class="col-sm">
      <table class="table">
      <tbody>
          <tr>
          <th scope="row"></th>
          <td>Консилиум по 2 специальностям /td>
          <td>2000р</td>
          <td>@mdo</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>Консилиум по 3 специальностям</td>
          <td>3000р</td>
          <td>@fat</td>
          </tr>
      </tbody>
    </table>
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
      <table class="table">
      <tbody>
          <tr>
          <th scope="row"></th>
          <td>Комплексное ведение пациента врачом-терапевтом в течение месяца с помощью использования телемедицинских технологий (одна первичная консультация дистанционно, очный прием, 3 повторных консультации дистанционно (1 чат, 1 видеосвязь, 1 звонок)</td>
          <td>4590р</td>
          <td>@mdo</td>
          </tr>
          <tr>
          <th scope="row"></th>
          <td>Комплексное ведение пациента врачом-терапевтом в течение месяца с помощью использования телемедицинских технологий (одна первичная консультация дистанционно, очный прием, 3 повторных консультации дистанционно (1 чат, 1 видеосвязь, 1 звонок), д.м.н. </td>
          <td>7565р</td>
          <td>@fat</td>
          </tr>
      </tbody>
    </table>
      </div>
      </div>

    </div>` )
}

navCardio.addEventListener('click', getCardio());

navRheumatology.addEventListener('click', getRheumatology());

navPulmonology.addEventListener('click', getPulmonology());

navFunctionalDiagnostics.addEventListener('click', getFunctionalDiagnostics());

navTherapy.addEventListener('click', getTherapy());

