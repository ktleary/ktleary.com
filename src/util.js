async function copyToClipboard(text) {
  return navigator.clipboard
    ? await navigator.clipboard
        .writeText(text)
        .then((_) => true)
        .catch((e) => {
          return false;
        })
    : false;
}

function splitMailto(mailto) {
  if (!mailto || !mailto.split(":").length > 1) return;
  const parts = mailto.split(":");
  const email = parts[1];
  return email;
}

const logger = (x) => console.log(x);

export { copyToClipboard, logger, splitMailto };
