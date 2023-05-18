export default function SpecializationBlock(): JSX.Element {
  return(
    <div className="questionnaire-coach__block"><span className="questionnaire-coach__legend">Ваша специализация (тип) тренировок</span>
      <div className="specialization-checkbox questionnaire-coach__specializations">
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="yoga"/><span className="btn-checkbox__btn">Йога</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="running"/><span className="btn-checkbox__btn">Бег</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="power" defaultChecked={true}/><span className="btn-checkbox__btn">Силовые</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="aerobics"/><span className="btn-checkbox__btn">Аэробика</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="crossfit" defaultChecked={true}/><span className="btn-checkbox__btn">Кроссфит</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="boxing" defaultChecked={true}/><span className="btn-checkbox__btn">Бокс</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="pilates"/><span className="btn-checkbox__btn">Пилатес</span>
          </label>
        </div>
        <div className="btn-checkbox">
          <label>
            <input className="visually-hidden" type="checkbox" name="specialisation" value="stretching"/><span className="btn-checkbox__btn">Стрейчинг</span>
          </label>
        </div>
      </div>
    </div>
  )
}
