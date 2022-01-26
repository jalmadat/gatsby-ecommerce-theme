// eslint-disable-next-line no-undef
module.exports = (plop) => {
    plop.setGenerator('component', {
      description: 'Create a component',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'What is your component name?',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Provide a short description for the component',
        },
      ],
      actions: [
        {
          type: 'add',
          path: './../components/{{pascalCase name}}/index.js',
          templateFile: 'base.index.hbs',
        },
        {
          type: 'add',
          path: './../components/{{pascalCase name}}/{{pascalCase name}}.js',
          templateFile: 'base.js.hbs',
        },
        {
          type: 'add',
          path: './../components/{{pascalCase name}}/{{pascalCase name}}.module.css',
          templateFile: 'base.module.css.hbs',
        },
        {
          type: 'add',
          path: './../components/{{pascalCase name}}/readme.md',
          templateFile: 'base.readme.hbs',
        },
      ],
    });
  };
  