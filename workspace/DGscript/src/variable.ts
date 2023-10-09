class Variable {
  variable = new Map<string, string[]>();

  public assign = (key: string, value: any) => {
    // Assign Variable
    if (key === null || key.length <= 0) {
      throw new Error("assign failed");
    }
    this.variable.set(key, value);
  };

  protected lookup = (key: any) => {
    // Verify that a variable name exists
    const got: string[] | undefined = this.variable.get(key);
    return Boolean(got); // return value type is boolean ( true or false )
  };
}

export default Variable;
