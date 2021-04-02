import React, { useState } from 'react';
import styles from './CurrentUrlBar.module.scss';
import { ReactComponent as SearchIcon } from '../../../../static/search.svg';
import { FaCopy } from 'react-icons/fa';
import { message, Tooltip } from 'antd';

export const CurrentUrlBar = ({ url }: { url: string }) => {
    const [hover, setHover] = useState(false);
    return (
        <div
            className={styles.urlBarWrapper}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <SearchIcon className={styles.searchIcon} />
            <Tooltip title={url}>
                <a
                    className={styles.urlLink}
                    target="_blank"
                    href={url}
                    rel="noreferrer"
                >
                    {url}
                </a>
            </Tooltip>
            <FaCopy
                style={{
                    opacity: hover ? 1 : 0,
                }}
                className={styles.copyIcon}
                onClick={() => {
                    navigator.clipboard.writeText(url);
                    message.success('Copied url to clipboard');
                }}
            />
        </div>
    );
};
