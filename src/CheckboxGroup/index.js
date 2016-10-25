import React, { Component } from 'react'
import CheckboxItem from '../CheckboxItem'
import styles from './styles.sass'

export default class CheckboxGroup extends Component {
    render() {
        const { group: { label, expanded, id, children }, onChange } = this.props

        return (
            <div className={styles.checkboxGroup}>
                <CheckboxItem label={label} onClick={() => onChange(id, !visible, expanded)}/>
                <div className={styles.children}>
                    {children.map((node) => {
                        const { id, expanded, visible, label, author, modified } = node
                        if (typeof expanded !== 'undefined') {
                            // group
                            return <div className={styles.child}><CheckboxGroup group={node} onChange={onChange} /></div>
                        } else if (typeof visible !== 'undefined') {
                            // node
                            return <div className={styles.child}><CheckboxItem label={label} author={author} modified={modified} /></div>
                        }
                        return <div/>
                    })}
                </div>
            </div>
        )
    }
}
