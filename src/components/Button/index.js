import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    disabled = false,
    rounded  = false,
    text = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // xóa lắng nghe sự kiện khi button đang bị vô hiệu hóa
    if(disabled) {
        Object.key(props).forEach(key => {
            if(key.startsWith('on') && typeof props[key] === 'function')
            delete props[key];
        })
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        // primary:primary tương đương với cái dưới
        primary,
        outline,
        small,
        large,
        text,
        disabled,
        rounded,
        // chú ý khi truyền className
      [className]:className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{leftIcon}</span>}
        </Comp>
    );
}

export default Button;
