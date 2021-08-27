//除外する文字列
const baseExcludeTexts = ['o', 'O', '0', 'i', 'l', '1'];
document.getElementById('excludeTexts').value = baseExcludeTexts.join(',');

const inputs = document.forms.inputs,
  passwordListElement = document.getElementById('passwordList');

document.getElementById('generateButton').addEventListener('click', e => {
  e.preventDefault();

  const isIncludeNumber = inputs.includeNumber.checked,
    isIncludeEnglishLowercase = inputs.includeEnglishLowercase.checked,
    isIncludeEnglishUppercase = inputs.includeEnglishUppercase.checked;

  if (isIncludeNumber || isIncludeEnglishLowercase || isIncludeEnglishUppercase) {

    // パスワードを生成するための配列を作る
    const passwordTexts = [];
    if (isIncludeEnglishLowercase) {
      for (let i = 0; i < 26; i++) {
        passwordTexts.push(String.fromCharCode('a'.charCodeAt(0) + i))
      }
    }
    if (isIncludeEnglishUppercase) {
      for (let i = 0; i < 26; i++) {
        passwordTexts.push(String.fromCharCode('A'.charCodeAt(0) + i))
      }
    }
    if (isIncludeNumber) {
      for (let i = 0; i < 10; i++) {
        passwordTexts.push(i)
      }
    }


    const excludeTexts = inputs.excludeTexts.value.split(','),
      excludepasswordTexts = passwordTexts.filter(text => !(excludeTexts.includes(String(text))));

    let passwordLength = inputs.stringLength.value,
      isOutOfRange = false;
    if (passwordLength === 'custom') {
      passwordLength = inputs.customLength.value;
      if (passwordLength < 1 || passwordLength > 100) {
        alert('文字数は1~100の中で設定してください')
        isOutOfRange = true;
      }
    }

    let numberOfPasswords = inputs.numberOfPasswords.value;
    if (numberOfPasswords === 'custom') {
      numberOfPasswords = inputs.customNumberOfPasswordInput.value;
      if (numberOfPasswords < 1 || numberOfPasswords > 100) {
        alert('生成するパスワードの個数は1~100の中で設定してください')
        isOutOfRange = true;
      }
    }

    if (!isOutOfRange) {

      passwordListElement.innerHTML = '';

      for (let i = 0; i < numberOfPasswords; i++) {
        let passwords = '';
        for (let j = 0; j < passwordLength; j++) {
          passwords += excludepasswordTexts[Math.floor(Math.random() * excludepasswordTexts.length)];
        }

        const li = document.createElement('li'),
          input = document.createElement('input'),
          copyButton = document.createElement('a');

        input.value = passwords;
        li.appendChild(input);

        copyButton.textContent = 'コピーする';
        copyButton.classList.add('copyButton');

        //コピー機能 仕組み textareaを作成してpasswordsが選択された状態になりexecCommand('copy')でクリップボードに上書きされる コピーされた後removeChild(textarea)でtextareaが削除する流れ
        copyButton.addEventListener('click', () => {
          const textarea = document.createElement('textarea');
          textarea.textContent = passwords;

          const body = document.querySelector('body');
          body.appendChild(textarea);

          textarea.select();
          document.execCommand('copy');
          body.removeChild(textarea);

          alert(`パスワード「${passwords}」をコピーしました!`)
        })
        li.appendChild(copyButton);

        passwordListElement.appendChild(li);
      }


    } else {
      alert('[パスワードを構成する文字]には,少なくとも1つい上の項目にチェックを入れてください')
    }
  }
})
