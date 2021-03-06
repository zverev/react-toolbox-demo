import React, { Component } from 'react'
import styles from './styles.sass'
import { Checkbox } from 'react-toolbox'
import moment from 'moment'
import If from '../If.js'

export default class CheckboxItem extends Component {
    render() {
        const { id, visible, label, modified, author, onChange, chidren, icon } = this.props

        return (
            <div className={styles.checkboxItem}>
                <div className={styles.checkboxArea}>
                    <Checkbox checked={visible} onChange={(value) => { onChange && onChange({ id, visible: !visible }) }}/>
                </div>
                <div className={styles.contentArea}>
                    <If condition={icon}>{icon}</If>
                    <span className={styles.label} onClick={(value) => { onChange && onChange({ id, visible: !visible }) }}>{label}</span>
                    <div className={styles.footer}>
                        <If condition={author}>
                            <span className={styles.author}>{author}</span>
                        </If>
                        <If condition={modified}>
                            <span className={styles.modified}>{moment(modified).format('D MMMM YYYY')}</span>
                        </If>
                    </div>
                </div>
            </div>
        )
    }
}
