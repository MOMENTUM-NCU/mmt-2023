function Button({children,cls}){
    return(
        <button
        type="button"
        className={cls}
      >{children}
      </button>
    )
}

export default Button;