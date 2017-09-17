export const TOGGLE_ADOPTION = 'TOGGLE_ADOPTION';
export type TOGGLE_ADOPTION = typeof TOGGLE_ADOPTION;

export interface AdoptAction {
  type: TOGGLE_ADOPTION;
  animalId: string;
}

export const toggleAdoption = (animalId: string): AdoptAction => ({
  type: TOGGLE_ADOPTION,
  animalId
});
