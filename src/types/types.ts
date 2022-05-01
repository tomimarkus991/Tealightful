export interface SelectOption {
  id: number;
  name: string;
}

export interface ITea {
  id: string;
  title: string;
  description: string;
  color: string;
  image: string;

  brewTime: {
    /**
     * @constant in seconds
     */
    min: number;
    /**
     * @constant in seconds
     */
    max: number;
  };
  /**
   * @constant in seconds
   * @constant in Celsius
   */
  steepTime: number;
  /**
   * @constant in seconds
   * @constant in Celsius
   */
  restTime: number;

  temperature: {
    /**
     * @constant in seconds
     */
    min: number;
    /**
     * @constant in seconds
     */
    max: number;
  };
}
