# eslint-plugin-comment-box-plugin

A small plugin to enforce some good practices

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-comment-box-plugin`:

```
$ npm install eslint-plugin-comment-box-plugin --save-dev
```

## Usage

Add `comment-box-plugin` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["comment-box-plugin"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "comment-box-plugin/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here
