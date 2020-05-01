const selectItem = require('..');
const { toHaveAttribute, toBeInTheDocument } = require('@testing-library/jest-dom/matchers');

expect.extend({ toHaveAttribute, toBeInTheDocument });

beforeEach( () => {
  window.alert = jest.fn();
  document.body.innerHTML = '';
});

describe('Funkcja selectItem', () => {
  it('powinna zwrócić element HTML', async () => {
    const result = selectItem();

    expect(result instanceof HTMLElement).toBeTruthy();
  });

  it('powinna zwrócić element o id #level', async () => {
    const button = selectItem();

    expect(button).toHaveAttribute('id', 'level');
  });

  it('powinna stworzyć element #level w elemencie <body>', async () => {
    selectItem();

    expect(document.body.querySelector('#level')).toBeInTheDocument();
  });

  it('powinna stworzyć element <select> z trzema tagami <option> wraz z liczbami w środku', async () => {
    selectItem();
    const select = document.body.querySelector('#level');

    expect(select.children.length).toBe(3);
    expect(select.querySelectorAll('option').length).toBe(3);
    expect(select.querySelectorAll('option')[0].value).toBe('1');
    expect(select.querySelectorAll('option')[1].value).toBe('2');
    expect(select.querySelectorAll('option')[2].value).toBe('3');
  });

  it('powinna wywołać window.alert z poprawną liczbą gdy element o id #level się zmieni na skutek zdarzenia', async () => {
    expect(window.alert).not.toHaveBeenCalled();
    selectItem();

    document.body.querySelector('#level').selectedIndex = 1;
    document.body.querySelector('#level').dispatchEvent(new Event('change'));

    expect(window.alert).toHaveBeenCalledWith('2');

    document.body.querySelector('#level').selectedIndex = 2;
    document.body.querySelector('#level').dispatchEvent(new Event('change'));

    expect(window.alert).toHaveBeenCalledWith('3');
  });
});
