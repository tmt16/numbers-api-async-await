let baseURL = "http://numbersapi.com"
let faveNum = 16
let multNums = [1, 2, 3]

// 1.
async function getFact() {
    let numberFact = await $.getJSON(
        `${baseURL}/${faveNum}?json`
    )
    console.log(numberFact.text)
}
getFact()

// 2.
async function getFacts() {
    let numberFacts = await $.getJSON(
        `${baseURL}/${multNums}?json`
    )
    console.log(numberFacts)
}
getFacts()

// 3.
async function fourFacts() {
    let facts = await Promise.all(
      Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${faveNum}?json`))
    );
    facts.forEach(data => {
      $('body').append(`<p>${data.text}</p>`);
    });
  }
  fourFacts();
