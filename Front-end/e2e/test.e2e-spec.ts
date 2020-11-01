import { AppPage } from './notes.po';
import  'jasmine';
import { browser, by, element } from 'protractor';
describe('test aionys app notes', () => {
  beforeEach(() =>{
    browser.get('/');
  });

  it('should display welcome message', () => {
    element(by.buttonText('Add new note')).click();
    element(by.name('id')).sendKeys('22');
    element(by.name('Text')).sendKeys('This is a test en');
    element(by.buttonText('Save')).click();
    expect(lastRow.getText()).toContain("This is a test en");
    /////////////////////////////////////////////////////////
    element(by.buttonText('Добавить новую заметку')).click();
    element(by.name('id')).sendKeys('22');
    element(by.name('Text')).sendKeys('This is a test ru');
    element(by.buttonText('Сохранить')).click();
    expect(lastRow.getText()).toContain("This is a test ru");
  });
});