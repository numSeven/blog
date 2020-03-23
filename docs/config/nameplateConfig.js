// 标示牌
module.exports = {
    title: 'Yur', // 内容
    width: '42px', // 宽度
    height: '32px', // 高度
    text: [
        {
            fontSize: '20',
            textAnchor: 'middle',
            x: '50%',
            y: '50%',
            textTransform: 'uppercase',
            fill: 'none',
            stroke: '#3498db',
            textShadow: '0 0 1px #3498db',
            strokeWidth: '1px',
            strokeDasharray: '90 310',
            animate: {
                attributeName: 'stroke-dashoffset',
                begin: '-1.5s',
                dur: '6s',
                from: '0',
                to: '-400',
                repeatCount: 'indefinite'
            }
        },
        {
            fontSize: '20',
            textAnchor: 'middle',
            x: '50%',
            y: '50%',
            textTransform: 'uppercase',
            fill: 'none',
            stroke: '#f39c12',
            textShadow: '0 0 1px #f39c12',
            strokeWidth: '1px',
            strokeDasharray: '90 310',
            animate: {
                attributeName: 'stroke-dashoffset',
                begin: '-3s',
                dur: '6s',
                from: '0',
                to: '-400',
                repeatCount: 'indefinite'
            }
        },
        {
            fontSize: '20',
            textAnchor: 'middle',
            x: '50%',
            y: '50%',
            textTransform: 'uppercase',
            fill: 'none',
            stroke: '#e74c3c',
            textShadow: '0 0 1px #e74c3c',
            strokeWidth: '1px',
            strokeDasharray: '90 310',
            animate: {
                attributeName: 'stroke-dashoffset',
                begin: '-4.5s',
                dur: '6s',
                from: '0',
                to: '-400',
                repeatCount: 'indefinite'
            }
        },
        {
            fontSize: '20',
            textAnchor: 'middle',
            x: '50%',
            y: '50%',
            textTransform: 'uppercase',
            fill: 'none',
            stroke: '#9b59b6',
            textShadow: '0 0 1px #9b59b6',
            strokeWidth: '1px',
            strokeDasharray: '90 310',
            animate: {
                attributeName: 'stroke-dashoffset',
                begin: '-6s',
                dur: '6s',
                from: '0',
                to: '-400',
                repeatCount: 'indefinite'
            }
        }
    ]
}