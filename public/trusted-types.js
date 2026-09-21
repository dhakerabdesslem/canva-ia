if (typeof window !== 'undefined' && window.trustedTypes && window.trustedTypes.createPolicy) {
  window.trustedTypes.createPolicy('default', {
    createHTML: (string, sink) => string,
    createScriptURL: (string) => string,
    createScript: (string) => string,
  });
}
