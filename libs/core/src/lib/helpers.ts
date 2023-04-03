import { plainToInstance, ClassConstructor } from 'class-transformer'

export function fillObject<T, V>(someDto: ClassConstructor<T>, plainObject: V) {
  return plainToInstance(someDto, plainObject, { excludeExtraneousValues: true});
}

export function getStaticPath(host: string, port: string, staticPath: string, fileName: string): string {
  return `http://${host}:${port}/${staticPath}/${fileName}`;
}

export function getAssetsPath(host: string, port: string, fileName: string): string {
  return `http://${host}:${port}/${fileName}`;
}

export const getRandomElement = (elements: string[]) => {
  const randomNumber = Math.floor(Math.random() * elements.length);

  return elements[randomNumber];
};
