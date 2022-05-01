export interface SelectOption {
  id: number;
  name: string;
}

export interface ITea {
  id: string;
  title: string;
  description: string;
  image: string;
  /**
   * @constant in Milliseconds
   */
  brewTime: number;
  /**
   * @constant in Milliseconds
   * @constant in Celsius
   */
  steepTime: number;
  /**
   * @constant in Milliseconds
   * @constant in Celsius
   */
  restTime: number;
  /**
   * @constant in Milliseconds
   * @constant in Celsius
   */
  steepTemperature: number;
  /**
   * @constant in Milliseconds
   * @constant in Celsius
   */
  restTemperature: number;
}
