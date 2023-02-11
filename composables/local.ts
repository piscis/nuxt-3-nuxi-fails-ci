import type { Ref } from 'vue';

// export const useLocaleDate = (date: Ref<Date> | Date) => {

export function useLocaleDate(date: Ref<Date> | Date) {
  return computed(() => {
    const dateTimeFormat = new Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
      dateStyle: 'full',
    });

    console.log(`dateTimeFormat >> process.server=`, process.server);
    console.log(`dateTimeFormat >> process.client=`, process.client);

    return dateTimeFormat.format(unref(date));
  });
}
