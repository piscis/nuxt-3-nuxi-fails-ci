import { describe, expect, it } from 'vitest';
import { $fetch } from '@nuxt/test-utils';

describe('Base', () => {
  it('should fail and break CI with exit code > 1', async () => {
    const doc = await $fetch('/');
    expect(doc).toContain('THIS_WILL_FAIL_ALWAYS');
  });

  it('should pass', async () => {
    const doc = await $fetch('/');
    expect(doc).toContain('Hello Nuxt');
  });
});
