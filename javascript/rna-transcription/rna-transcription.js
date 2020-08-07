export const toRna = (input) => {
  const rna = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A',
  };

  return input.replace(/[CGAT]/g, (nuc) => rna[nuc]);
};
