import './FormsControl.css';

export const Textarea = ({input, meta, ...props}) => {

  const hasError = () => {
    return meta.error && meta.touched;
  }

  return (
    <div>
      <textarea className={`form-control ${hasError() ? "error" : "" }`} {...input} {...props}/>
      {hasError() && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {

  const hasError = () => {
    return meta.error && meta.touched;
  }

  return (
    <div>
      <input className={`form-control ${hasError() ? "error" : "" }`} {...input} {...props}/>
      {hasError() && <span>{meta.error}</span>}
    </div>
  )
}
