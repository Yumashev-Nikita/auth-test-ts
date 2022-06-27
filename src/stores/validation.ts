import { defineStore } from 'pinia'

export const useValidation = defineStore('useValidation', {
  state: () => {
    return {
      flag_pw: Boolean(),
      errors_pw: Array(String()),
      flag_profile: Boolean(),
      errors_profile: Array(String()),
    };
  },
  getters: {
  },
  actions: {
    validatePassword(password: string) {
      const errors = [];
      let flag = true;
      if (password.length < 8) {
        errors.push('Пароль должен содержать минимум 8 знаков.'); 
      }
      if (password.search(/[a-z]/i) < 0) {
        errors.push('Пароль должен содержать минимум одну букву.');
      }
      if (password.search(/[0-9]/) < 0) {
        errors.push('Пароль должен содержать цифры.'); 
      }
      if (errors.length > 0) {
        flag = false;
      }
      this.errors_pw = errors;
      this.flag_pw = flag;
    },
    validateProfileData(
      payload: {
        name: string,
        about: string,
        github: string,
        city: string,
        is_finished: true,
        telegram: string,
        phone: string,
        birthday: string
      }): boolean {
      const phone_nuber_regex = /((\+7)|(8))([0-9- ]{10})/;
      const github_regex = /^(http(s?):\/\/)?(www\.)?github\.([a-z])+\/([A-Za-z0-9-]{1,})+\/?$/i;
      const birthday_regex = /(((0[1-9]|[12][0-9]|3[01])([.])(0[13578]|10|12)([.])(\d{4}))|(([0][1-9]|[12][0-9]|30)([.])(0[469]|11)([.])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([.])(02)([.])(\d{4}))|((29)(\/)(02)([.])([02468][048]00))|((29)([.])(02)([.])([13579][26]00))|((29)([.])(02)([.])([0-9][0-9][0][48]))|((29)([.])(02)([.])([0-9][0-9][2468][048]))|((29)([.])(02)([.])([0-9][0-9][13579][26])))/;
      const errors = [];
      let flag = true;
      if (payload.name.length > 0) {
        if (payload.name.search(/[0-9]/) > 0) {
          errors.push('Имя не должно содержать цифры.');
        }
        if (payload.name.search(/[а-я]/i) < 0) {
          errors.push('Имя должно содержать буквы.');
        }
      } else {
        errors.push('Поле "имя" не должно быть пустым.');
      }
      if (payload.city.length > 0) {
        if (payload.city.search(/[0-9]/) > 0) {
          errors.push('Город не должен содержать цифры.');
        }
        if (payload.city.search(/[а-я]/i) < 0) {
          errors.push('Город должен содержать буквы.');
        }
      } else {
        errors.push('Поле "город" не должно быть пустым.');
      }
      if (payload.github.search(github_regex) < 0) {
        errors.push('Не действительная ссылка на github.');
      }
      if (payload.birthday.search(birthday_regex)) {
        errors.push('Дата рождения должна быть в формате дд.мм.гггг');
      }
      if (payload.phone.search(phone_nuber_regex) < 0) {
        errors.push('Номер телефона не действителен.');
      }
      if (payload.telegram.search(phone_nuber_regex) < 0) {
        errors.push('Telegram не действителен.');
      }
      if (errors.length > 0) {
        flag = false;
      }
      this.flag_profile = flag;
      this.errors_profile = errors;
      return flag;
    },
  },
});
