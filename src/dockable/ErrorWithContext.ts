class ErrorWithContext extends Error {
  context: any;

  constructor(message: string, context: any) {
    super(message);
    this.name = 'CustomError';
    this.context = context;
    Object.setPrototypeOf(this, ErrorWithContext.prototype);
  }
}

export { ErrorWithContext };
