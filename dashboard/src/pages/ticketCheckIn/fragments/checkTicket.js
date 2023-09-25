import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Svg } from "assets";
import { MinLoader, TextRow } from "components";
import { ticketsActions } from "store";
import {dateConverter, multiConverter} from "../../../utils/hooks/dateConverter";
import { FindLoad } from "utils";

export const CheckTicket = ({}) => {
  const dispatch = useDispatch();
  const loader = FindLoad('CHANGE_TICKET_STATUS')
  const { soldTicketInfo } = useSelector((state) => ({
    soldTicketInfo: state.tickets.soldTicketInfo
  }));

  const handleCheck = () => {
    dispatch(ticketsActions.changeTicketStatus(soldTicketInfo?.id, soldTicketInfo?.ticketId?.id));
  };

  return (
    <div>
      {soldTicketInfo &&
        <div className="tickets-check-in-header">
          <div className="ticket-card-wrapper">
            <div className="left-side" style={soldTicketInfo?.status === 'CHECKED' ? { borderRight: '1px dashed #9F9F9F' } : {}}>
              <p className="ticket-event-title">
                <TextRow name={soldTicketInfo?.ticketId?.eventId?.title} textWidth={9} />
              </p>
              <p className="ticket-name">
                <TextRow name={soldTicketInfo?.ticketId?.name} textWidth={9} />
              </p>
              <div className='date-and-address'>
                <div className='date-month-year'>
                  <p>
                    {dateConverter(soldTicketInfo?.ticketId?.eventId, 'DD')}
                    {/*// soldTicketInfo?.ticketId && multiConverter(*/}
                    {/*// soldTicketInfo?.ticketId?.eventId?.startDate,*/}
                    {/*// soldTicketInfo?.ticketId?.eventId?.startTime,*/}
                    {/*// soldTicketInfo?.ticketId?.eventId?.timezoneOffset, 'DD')}*/}
                  </p>
                  <p>
                    {dateConverter(soldTicketInfo?.ticketId?.eventId, 'ddd')}
                    {/*{soldTicketInfo?.ticketId && multiConverter(*/}
                    {/*soldTicketInfo?.ticketId?.eventId?.startDate,*/}
                    {/*soldTicketInfo?.ticketId?.eventId?.startTime,*/}
                    {/*soldTicketInfo?.ticketId?.eventId?.timezoneOffset, 'ddd')*/}
                    {/*}*/}
                  </p>
                  <span>
                     {dateConverter(soldTicketInfo?.ticketId?.eventId, 'YYYY')}
                    {/*{soldTicketInfo?.ticketId && multiConverter(*/}
                    {/*soldTicketInfo?.ticketId?.eventId?.startDate,*/}
                    {/*soldTicketInfo?.ticketId?.eventId?.startTime,*/}
                    {/*soldTicketInfo?.ticketId?.eventId?.timezoneOffset, 'YYYY')}*/}
                  </span>
                </div>
                <div className='address-time'>
                  <p className='day-time'>
                    {dateConverter(soldTicketInfo?.ticketId?.eventId, 'MMM')}
                    {/*{soldTicketInfo?.ticketId && multiConverter(*/}
                    {/*soldTicketInfo?.ticketId?.eventId?.startDate,*/}
                    {/*soldTicketInfo?.ticketId?.eventId?.startTime,*/}
                    {/*soldTicketInfo?.ticketId?.eventId?.timezoneOffset, 'MMM')*/}
                  {/*}*/}
                    <span>
                        {dateConverter(soldTicketInfo?.ticketId?.eventId, 'hh:mm')}
                  {/*{soldTicketInfo?.ticketId && multiConverter(*/}
                  {/*  soldTicketInfo?.ticketId?.eventId?.startDate,*/}
                  {/*  soldTicketInfo?.ticketId?.eventId?.startTime,*/}
                  {/*  soldTicketInfo?.ticketId?.eventId?.timezoneOffset, 'hh:mm')*/}
                  {/*}*/}
                </span></p>
                  <p className='address-text'>{
                    soldTicketInfo?.ticketId?.eventId?.address?.formattedAddress
                  }</p>
                </div>
              </div>
            </div>
            {soldTicketInfo?.status !== 'CHECKED' &&
              <div className="ticket-ellipse-row">
                <img src={Svg.ellipseTop} alt="icon" />
                <div className="dashed-line" />
                <img src={Svg.ellipseBottom} alt="icon" />
              </div>
            }
            <div className="right-side" style={soldTicketInfo?.status === 'CHECKED' ? { transform: 'translate(13px, 10px) rotate(7deg)' } : {}}>
              <div className="right-side-qr-wrapper">
                <img src={soldTicketInfo?.qr?.url} alt="icon" />
              </div>
              <p className="display-id">#{soldTicketInfo?.ticketId?.displayId}</p>
            </div>
          </div>

          <div className='button-flex-end'>
          {soldTicketInfo?.status === 'CHECKED' ?
            <div className='checked-in-status-wrapper'>
              <div className='circle' />
              <p className='checked-in-status'>Checked In</p>
            </div>
            :
            <button onClick={handleCheck} className="check-in-btn">
              {loader?.length ?
                <MinLoader color={"white"} position={"relative"} margin={'0'} />
                :
                'Check In'
              }
            </button>
          }
          </div>

        </div>
      }
    </div>
  );
};