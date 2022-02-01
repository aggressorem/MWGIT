function Season(season = 'Невідома') {
  this.month = 12
  this.year = 2022
  this.season = season
  this.answer = function() {
    alert(season + " прекрасна пора року!")
  }
}

const newSeason = new Season()
const winter = new Season("Зима")
winter.answer()