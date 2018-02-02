// Stores the currently-being-typechecked object for error messages.
let obj: any = null;
export class CommentProxy {
  public readonly body: string;
  public readonly date: string;
  public readonly uid: string;
  public readonly key:string;
  public static Parse(d: string): CommentProxy {
    return CommentProxy.Create(JSON.parse(d));
  }
  public static Create(d: any, field: string = 'root'): CommentProxy {
    if (!field) {
      obj = d;
      field = "root";
    }
    if (d === null || d === undefined) {
      throwNull2NonNull(field, d);
    } else if (typeof(d) !== 'object') {
      throwNotObject(field, d, false);
    } else if (Array.isArray(d)) {
      throwIsArray(field, d, false);
    }
    checkString(d.body, false, field + ".body");
    checkString(d.date, false, field + ".date");
    checkString(d.uid, false, field + ".uid");
    return new CommentProxy(d);
  }
  private constructor(d: any) {
    this.body = d.body;
    this.date = d.date;
    this.uid = d.uid;
  }
}

function throwNull2NonNull(field: string, d: any): never {
  return errorHelper(field, d, "non-nullable object", false);
}
function throwNotObject(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function throwIsArray(field: string, d: any, nullable: boolean): never {
  return errorHelper(field, d, "object", nullable);
}
function checkString(d: any, nullable: boolean, field: string): void {
  if (typeof(d) !== 'string' && (!nullable || (nullable && d !== null && d !== undefined))) {
    errorHelper(field, d, "string", nullable);
  }
}
function errorHelper(field: string, d: any, type: string, nullable: boolean): never {
  if (nullable) {
    type += ", null, or undefined";
  }
  throw new TypeError('Expected ' + type + " at " + field + " but found:\n" + JSON.stringify(d) + "\n\nFull object:\n" + JSON.stringify(obj));
}
