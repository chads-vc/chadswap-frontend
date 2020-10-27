import React, { useCallback, useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import { useWallet } from 'use-wallet'


import Button from '../../Button'
import Modal, { ModalProps } from '../../Modal'
import ModalActions from '../../ModalActions'
import ModalContent from '../../ModalContent'
import ModalTitle from '../../ModalTitle'
import CardIcon from '../../CardIcon'

import usePopCherry from '../../../hooks/usePopCherry'


const RebaseWarningModal: React.FC<ModalProps> = ({ onDismiss }) => {
  const { account, connect } = useWallet()
  
  const [pendingTx, setPendingTx] = useState(false)

  const {onPopCherry} = usePopCherry()

  return (
    <Modal>
        <ModalTitle text="Rebase Warning" />
        <ModalContent>
          WARNING: Only 1 rebase transaction succeeds every 12 hours. This transaction will likely fail.
        </ModalContent>
        <ModalActions>
          <Button
            onClick={() => onDismiss()}
            text="Cancel"
          />
          <Button
            onClick={async () => {
              setPendingTx(true)
              await onPopCherry()
              setPendingTx(false)
            }}
            text="Confirm rebase"
          />
        </ModalActions>
      </Modal>
   )
  }

const StyledWalletsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${(props) => props.theme.breakpoints.mobile}px) {
    flex-direction: column;
    flex-wrap: none;
  }
`

const StyledWalletCard = styled.div`
  flex-basis: calc(50% - ${(props) => props.theme.spacing[2]}px);
`

export default RebaseWarningModal
