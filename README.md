# Questionnaire

Package for generating random question(s) in multiple languages.

[![Testing](https://github.com/MilosPaunovic/questionnaire/actions/workflows/testing.yml/badge.svg)](https://github.com/MilosPaunovic/questionnaire/actions/workflows/testing.yml)

## Try it Online

[Link to Codepen playground](https://codepen.io/milospaunovic/pen/MWGrdEZ?editors=1011)

## Motivation

Main idea and motivation behind this was work from [Nenad Ilić](https://github.com/ilic5000) and his post I saw on [Reddit](https://www.reddit.com/r/programiranje/comments/xofp1t/anansi_computer_vision_mini_projekat_izvukao_sam/). You could (and should) read more about it [here](https://github.com/ilic5000/pabkvizgenerator/blob/main/README.md).

## Installation

```bash
npm i @paunovic/questionnaire
```

## Configuring

```js
import { initialize } from '@paunovic/questionnaire'

// Initialization with default language pack
const QUESTIONNAIRE = initialize();

// Initialization with different language pack, including variation
const QUESTIONNAIRE = initialize({ countryCode: 'rs', variation: 'cyrillic' })
```

Currently available country codes and variations:

| Country       | Country code | Variation  |
| :------------ | :----------: | :--------: |
| Serbia `*`    | `rs`         | `cyrillic` |

`*` Default language; if no `countryCode` parameter is passed to `initialize` method, serbian latin will be loaded as a default language.

## Methods

```js
// Returns random question from the list
QUESTIONNAIRE.question()

// Returns array of questions from the list, defaults to 10, could be overridden
QUESTIONNAIRE.questions(howMany = 10)
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Please try to follow [semantic commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) principle to simplify navigation through git history.

## License

[MIT](https://raw.githubusercontent.com/MilosPaunovic/questionnaire/develop/LICENSE) © [Milos Paunovic](https://github.com/MilosPaunovic)
