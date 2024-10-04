import { UniqueComponentId } from '@/utils';

describe('UniqueComponentId function', () => {

  it('Should increment counter ID', () => {
    UniqueComponentId();
    UniqueComponentId();
    const value = UniqueComponentId();
    expect(value).toBe('por_id_3');
  });

});
