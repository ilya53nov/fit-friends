const enum Score {
  Min = 1,
  Max = 5,
}

const enum TextLength {
  Min = 100,
  Max = 1024,
}

export const ReviewValidation = {
  Score: {
    Min: Score.Min,
    Max: Score.Max,
    Message: `Оценка может быть в диапазоне от ${Score.Min} до ${Score.Max} (включительно)`,
  },
  TextLength: {
    Min: TextLength.Min,
    Max: TextLength.Max,
    Message: `Текст отзыва должен содержать минимум: ${TextLength.Min}, максимум: ${TextLength.Max} (символов)`
  },
}
